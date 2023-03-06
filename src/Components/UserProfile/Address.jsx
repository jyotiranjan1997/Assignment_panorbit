import Map from "../Map/Map";
import Styles from "./UserProfile.module.css";
export default function Address({ street, suite, city, zipcode, geo }) {
  return (
    <div>
      <h2>Address:</h2>
      <div>
        <div className={Styles.Text}>
          <p>Street :</p>
          <p>{street}</p>
        </div>
        <div className={Styles.Text}>
          <p>Suite :</p>
          <p>{suite}</p>
        </div>
        <div className={Styles.Text}>
          <p>City :</p>
          <p>{city}</p>
        </div>
        <div className={Styles.Text}>
          <p>Zipcode :</p>
          <p>{zipcode}</p>
        </div>
      </div>
      <div>
        <Map {...geo} />
        <div className={Styles.lng}  >
         {geo && <p> Lat :{geo.lat}</p>}
          {geo && <p> Lng :{geo.lng}</p>}
        </div>
      </div>
    </div>
  );
}
