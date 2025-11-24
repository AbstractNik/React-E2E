

function Message({ count }) {
    // This is a function that will return a JSX element that displays the message
    // The count is passed as a prop to the Message component
    return (
        <p>you have read <strong>{count}</strong> advices</p>
    )
}

export default Message