import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonCardTitle
} from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

// aa781v1qfboj space id
// RQAJmMzmfLt-gFXKxVQa025ALHeetH-S4ZyFfIg4JB4 token

// https://graphql.contentful.com/content/v1/spaces/[YOUR_SPACE_ID]/explore?access_token=[YOUR_ACCESS_TOKEN]

// https://graphql.contentful.com/content/v1/spaces/aa781v1qfboj/explore?access_token=RQAJmMzmfLt-gFXKxVQa025ALHeetH-S4ZyFfIg4JB4


// const Tab1: React.FC = () => {
const Tab1 = () => {

  const query = `
  {
    votacionCollection {
      items {
        titulo
        votosAFavor
        votosEnContra
        abstenciones
        pendientesDeVotar
        fechaCreacion
        fechaLimite
        aprobada,
        texto,
        imagenPrincipal {
          title
          url
        }
      } 
    }
  }
  `

  // interface item {
  //   imagenPrincipal: string;
  // }

  const [items, setItems] = useState([]);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/aa781v1qfboj/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer RQAJmMzmfLt-gFXKxVQa025ALHeetH-S4ZyFfIg4JB4",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setItems(data.votacionCollection.items);
        console.log(data.votacionCollection.items[0]);
      });
  }, []);

  // if (!page) {
  //   return "Loading...";
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Votaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Votaciones</IonTitle>
            <IonCard>

            </IonCard>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Votaciones" />
      </IonContent> */}
      <IonContent fullscreen>
        {
          items.map(item => (
            <IonCard style={{
              maxWidth: '480px'
            }}>
              <img src={item.imagenPrincipal.url} />
              <IonCardHeader>
                {/* <IonCardSubtitle>Destination</IonCardSubtitle> */}
                <IonCardTitle>{item.titulo}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div style={{ marginBottom: '20px' }}>{item.texto}</div>
                <div>
                  <p>Votos: A favor: {item.votosAFavor} · En contra: {item.votosEnContra} · Abstenciones: {item.abstenciones}</p>
                </div>
                <div
                  className="ion-justify-content-between"
                  style={{
                    display: 'flex',
                    margin: '20px auto 8px'
                  }}
                >
                  <IonButton color="success" style={{ width: '100%' }}>Sí</IonButton>
                  <IonButton color="medium" style={{ width: '100%' }}>Abstención</IonButton>
                  <IonButton color="danger" style={{ width: '100%' }}>No</IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          ))
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab1;


// dev-6rywxuru.eu.auth0.com
