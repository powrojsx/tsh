import {User} from "./interfaces";

interface ElementsCollection {
    usernameInput: HTMLInputElement;
    searchUserForm: HTMLFormElement;
    userAvatar: HTMLElement;
    userName: HTMLElement;
    userLogin: HTMLElement;
    userBio: HTMLElement;
}

export class AppView {
    private elements: ElementsCollection = {
        usernameInput: document.getElementById('github-username') as HTMLInputElement,
        searchUserForm: document.getElementById('search-user-form') as HTMLFormElement,
        userAvatar: document.getElementById('profile-image'),
        userName: document.getElementById('profile-name'),
        userLogin: document.getElementById('profile-url'),
        userBio: document.getElementById('profile-bio')
    }

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
}