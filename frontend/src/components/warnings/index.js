export default function Warnings({ array }) {

  if (!array) {
    return (
      <h1>Loading</h1>
    )
  } else {
    return (
      <div>
        <h1>Warnings</h1>
      </div>
    )
  }
}
