export default function RenderImages({ classImg, pathImage, altImage }) {
    return (
        <img className={classImg} src={pathImage} onDragStart={e => e.preventDefault()}
            alt={altImage} />
    );
}