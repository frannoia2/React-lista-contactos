import { useEffect, useState } from "react";
import {Contacto} from "./Contacto";

export function Contactos(){
    const [contacts, setContacts] = useState([])

    useEffect(() => {
      fetch("https://randomuser.me/api/?results=3").then(res => res.json()).then((data) => {
        setContacts(data.results);
      });
    }, []);
    

    return(
        <ul>
            {contacts.map((contact) => (
                <Contacto key={contact.email} contact={contact} />
            ))}
        </ul>

    );
}