import InteractiveMap from "./components/InteractiveMap/InteractiveMap";
import AddMarkerForm from "./components/AddMarkerForm/AddMarkerForm";
import MarkerList from "./components/MarkerList/MarkerList";

export function App() {
  return (
    <>
      <header>
        <h1>Interative Map</h1>
      </header>
      <main>
        <InteractiveMap />
        <AddMarkerForm />
        <MarkerList />
      </main>
    </>
  );
}