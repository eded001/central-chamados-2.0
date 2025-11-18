export default function Main({ children }) {
    return (
        <main className="bg-blue-400 h-screen flex flex-row items-center p-2 gap-2">
            {children}
        </main>
    );
}