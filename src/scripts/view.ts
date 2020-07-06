import {User} from "./interfaces";
import {parseDate, parseGithubResponsePayload} from "./helpers";

interface ElementsCollection {
    usernameInput: HTMLInputElement;
    loadBtn: HTMLButtonElement;
    searchUserForm: HTMLFormElement;
    userAvatar: HTMLElement;
    userName: HTMLElement;
    userLogin: HTMLElement;
    userBio: HTMLElement;
    historyContainer: HTMLElement;
    historyError: HTMLElement;
    mainContent: HTMLElement;
    placeholderContent: HTMLElement;
    spinner: HTMLElement;
}

export class AppView {
    private elements: ElementsCollection = {
        usernameInput: document.getElementById('github-username') as HTMLInputElement,
        loadBtn: document.getElementById('load-username-btn') as HTMLButtonElement,
        searchUserForm: document.getElementById('search-user-form') as HTMLFormElement,
        userAvatar: document.getElementById('profile-image'),
        userName: document.getElementById('profile-name'),
        userLogin: document.getElementById('profile-url'),
        userBio: document.getElementById('profile-bio'),
        historyContainer: document.getElementById('user-timeline'),
        historyError: document.getElementById('history-error'),
        mainContent: document.getElementById('main-content'),
        placeholderContent: document.getElementById('placeholder-content'),
        spinner: document.getElementById('spinner')
    }

    public showMainContent = () => {
        this.elements.mainContent.classList.remove('is-hidden');
        this.elements.placeholderContent.classList.add('is-hidden');
    }

    public hideMainContent = () => {
        this.elements.mainContent.classList.add('is-hidden');
        this.elements.placeholderContent.classList.remove('is-hidden');
    }

    public showLoader = () => {
        this.elements.spinner.classList.remove('is-hidden');
        this.elements.mainContent.classList.add('is-hidden');
        this.elements.loadBtn.classList.add('is-loading');
    };

    public hideLoader = () => {
        this.elements.spinner.classList.add('is-hidden');
        this.elements.mainContent.classList.remove('is-hidden');
        this.elements.loadBtn.classList.remove('is-loading');
    };

    public getInputValue = (): string => {
        return this.elements.usernameInput.value.trim();
    }

    public clearInput = ():void => {
        this.elements.usernameInput.value = '';
    }

    public setInputError = (): void => {
        this.elements.usernameInput.classList.add('is-danger')
    };

    public clearInputError = (): void => {
        this.elements.usernameInput.classList.remove('is-danger')
    };

    public getHTMLElements = (): ElementsCollection => this.elements;

    public renderProfile = (user: User): void => {
        this.elements.userAvatar.setAttribute('src', user.avatar_url);
        this.elements.userName.textContent = user.name;
        this.elements.userBio.textContent = user.bio;
        this.elements.userLogin.setAttribute('href', `https://github.com/${user.login}`);
        this.elements.userLogin.textContent = user.login;
    }

    private clearProfile = (): void => {
        this.elements.userAvatar.setAttribute('src', '');
        this.elements.userName.textContent = '';
        this.elements.userBio.textContent = '';
        this.elements.userLogin.setAttribute('href', '');
        this.elements.userLogin.textContent = '';
    }

    public backToInitialState = (): void => {
        this.clearProfile();
    }

    private buildHistoryItemMarkup = (item: any) => {
        return `
            <li class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <p class="heading">${parseDate(item.created_at)}</p>
                  <div class="content history">
                    <div class="history__avatar">
                        <span class="image is-24x24 is-inline-block">
                            <img src="${item.actor.avatar_url}" class="is-rounded" alt="" />
                        </span>
                    </div>
                    <div>
                        <span class="gh-username">
                            <a href="${item.actor.url}">${item.actor.login}</a>
                        </span>
                        ${parseGithubResponsePayload(item)}
                    <p class="repo-name">
                      <a href="${item.repo.url}">${item.repo.name}</a>
                    </p>
                    </div>
                  </div>
                </div>
              </li>
        `;
    };

    public renderHistory = (history: any[]) => {
        this.elements.historyContainer.innerHTML = '';
        let markup = '';

        if(history.length > 0) {
            this.hideHistoryError();
            history.forEach(item => {
                markup += this.buildHistoryItemMarkup(item);
            });

            this.elements.historyContainer.innerHTML = '';
            this.elements.historyContainer.insertAdjacentHTML('beforeend', markup);
        } else {
            this.showHistoryError();
        }
    }

    private showHistoryError = () => {
        this.elements.historyError.classList.remove('is-hidden');
    }

    private hideHistoryError = () => {
        this.elements.historyError.classList.add('is-hidden');
    }
}