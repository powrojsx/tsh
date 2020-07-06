import {AppView} from "./view";
import {AppModel} from "./model";

export class AppController {
    private appView: AppView = new AppView();
    private appModel: AppModel = new AppModel();

    private validateUsername = (username: string) => {
        const validationPatter = new RegExp(/^[a-zA-Z 0-9\-_]*$/g);

        console.log(username.length);
        console.log(validationPatter.test(username));

        if(username.length < 1 || !validationPatter.test(username)) {
            this.appView.setInputError();
        }

        return username.length > 0 && validationPatter.test(username);
    }

    private findUser = async (e: Event) => {
        e.preventDefault();
        const value = this.appView.getInputValue();
        const isValid = this.validateUsername(value);

        if(isValid) {
            this.appView.clearInputError();
            const data = await this.appModel.getUserData(value);
            this.appView.renderProfile(data);
            this.appView.clearInput();
        }
    }

    public initializeApp = () => {
        this.appView.getHTMLElements().searchUserForm.addEventListener('submit', this.findUser);
    }
}