import Sidebar from '../../Components/Sidebar'
import Chat from "../../Components/Chat";

export default function Home() {
  return (
    <>
      <main className="flex h-screen overflow-hidden p-4 shadow-md">
        <Chat />
        <Sidebar />
      </main>
    </>
  );
}
