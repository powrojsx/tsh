import {AppView} from "./view";
import {AppModel} from "./model";

export class AppController {
    private appView: AppView = new AppView();
    private appModel: AppModel = new AppModel();

    private validateUsername = (username: string) => {
        const validationPatter = new RegExp(/^[a-zA-Z 0-9\-_]*$/g);

        if(username.length < 1 || !validationPatter.test(username)) {
            this.appView.setInputError();
            throw new Error('Validation error!')
        }
    }

    private findUser = async (e: Event) => {
        e.preventDefault();

        this.appView.backToInitialState();

        const value = this.appView.getInputValue();

        try {
            this.validateUsername(value);
            this.appView.clearInputError();
            this.appView.showLoader();
            const data = await this.appModel.getUserData(value);
            this.appView.renderProfile(data);
            const history = await this.appModel.getUserHistory(value);
            this.appView.renderHistory(history);
            this.appView.hideLoader();
            this.appView.showMainContent();
            this.appView.clearInput();
        } catch (error) {
            console.log(error);
        }
    }

    public initializeApp = () => {
        this.appView.getHTMLElements().searchUserForm.addEventListener('submit', this.findUser);
        console.log('App initialized...')
    }
}