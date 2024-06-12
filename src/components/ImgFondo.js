async function ImgFondo() {
    return (
        <div className="w-full h-full absolute top-0 left-0 z-[-1]">
            <img
                className="w-full h-full"
                src="/fondo.png"
                alt=""
                srcSet=""
            />
        </div>
    );
}

export default ImgFondo;