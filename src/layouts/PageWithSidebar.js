import SideBar from "../components/SideBar";

export default function ({ children }) {

    return (
        <div className='main-container background'>
            <SideBar />        
            <main>
                {children}
            </main>
        </div>
    );
}