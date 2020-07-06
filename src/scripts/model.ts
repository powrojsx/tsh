export class AppModel {
    private historyWhiteList: string[] = ['PullRequestEvent', 'PullRequestReviewCommentEvent'];

    getUserData = async (username: string) => {
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            return await res.json();
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getUserHistory = async (username: string) => {
        try {
            const res = await fetch(`https://api.github.com/users/${username}/events/public`);
            const data = await res.json();
            return data.filter(item => this.historyWhiteList.includes(item.type));
        } catch (error) {
            throw new Error(error.message);
        }
    }
}