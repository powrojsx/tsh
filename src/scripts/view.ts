interface ElementsCollection {
    usernameInput: HTMLInputElement;
    searchUserForm: HTMLFormElement;
}

export class AppView {
    private elements: ElementsCollection = {
        usernameInput: document.getElementById('github-username') as HTMLInputElement,
        searchUserForm: document.getElementById('search-user-form') as HTMLFormElement,
    }

    public getInputValue = (): string => {
        return this.elements.usernameInput.value.trim();
    }

    public setInputError = (): void => {
        this.elements.usernameInput.classList.add('is-danger')
    };

    public clearInputError = (): void => {
        this.elements.usernameInput.classList.remove('is-danger')
    };

    public getHTMLElements = (): ElementsCollection => this.elements;
}