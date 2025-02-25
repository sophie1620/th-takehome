interface IErrorMessage {
  message: String;
}

export default function Error({message}: IErrorMessage) {
  return (
    <div>
      <p>Oops...</p>
      <p>{message}</p>
    </div>
  )
}