import Map from "../Map/Map";





export default function Address({ street, suite, city, zipcode,geo}) {
  return (
    <div>
      <h2>Address:</h2>
      <div>
        <ul>
          <li>
            Street : <span>{street}</span>
          </li>
          <li>
            Suite :<span>{suite}</span>
          </li>
          <li>
            City :<span>{city}</span>
          </li>
          <li>
            Zipcode :<span>{zipcode}</span>
          </li>
        </ul>
      </div>
      <div>
       <Map {...geo} />
      </div>
    </div>
  );
}
