import './ Error.css';
interface IErrorMessage {
  message: String;
}

export default function Error({message}: IErrorMessage) {
  return (
    <div className="error-container">
      <p className="error-oops">Oops...</p>
      <p>{message}</p>
    </div>
  )
}