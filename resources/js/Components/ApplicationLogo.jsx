export default function ApplicationLogo(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            {/* Image Logo */}
            <img
                src={new URL("../../../public/Minsu.jpg", import.meta.url).href}
                alt="Logo"
                className="h-11 w-auto fill-current text-gray-500" // Customize size as needed
                // Ensures compatibility with inline styles
            />
        </div>
    );
}
