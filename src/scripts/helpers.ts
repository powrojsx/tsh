export function parseDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
}

export function parseGithubResponsePayload(item) {

    let description = '';

    switch (item.type) {
        case 'PullRequestReviewCommentEvent':
            description = `${item.payload.action} <a href="${item.payload.comment.url}">comment</a> to <a href="${item.payload.pull_request.url}">pull request</a>`;
            break;

        case 'PullRequestEvent':
            description = `${item.payload.action} <a href="${item.payload.pull_request.url}">pull request</a>`;
            break;
    }

    return description;
}