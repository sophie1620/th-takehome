import './ Error.css';

import { IErrorMessage } from '../../interface';

export default function Error({message}: IErrorMessage) {
  return (
    <div className="error-container">
      <p className="error-oops">Oops...</p>
      <p>{message}</p>
    </div>
  )
}