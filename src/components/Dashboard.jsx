import Card from './Card';
import data from '../data/data.json'
import {useState, useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
 
function Dashboard() {
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "invitees"));
          const dataArray = querySnapshot.docs.map(doc => doc.data());
          setItems(dataArray);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

    // Insert state to store items, initialized with data from JSON file
    return (
        <div className="relative my-12 flex flex-col items-center">
            {/* TITLE */}
            <h1 className="poppins-bold flex-row text-2xl text-forestgreen">Meet the Cats</h1>
            <hr className="mb-4 mt-2 w-1/3 border-black" />
 
            {/* Event List Grid */}
            <div className="relative z-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map through items and render a Card component for each in the section below */}
                {data.map((object) => ( <Card 
                key={object.id}
                name={object.name}
                img={object.img}
                desc={object.desc}
                />))}
            </div>
        </div>
    );
}
export default Dashboard;