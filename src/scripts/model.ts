export class AppModel {
    getUserData = async (username: string) => {
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            return await res.json();
        } catch (error) {
            throw new Error(error.message)
        }
    }
}