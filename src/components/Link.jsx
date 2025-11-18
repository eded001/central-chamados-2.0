export default function Link({ url, children }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline hover:text-sky-800"
        >
            {children}
        </a>
    );
}