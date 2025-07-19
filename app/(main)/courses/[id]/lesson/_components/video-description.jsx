function VideoDescription({ description }) {
    return (
        <div className="flex flex-col mt-4 ml-4">
            <p className="text-lg font-medium">Description</p>
            <span className="text-sm pt-8">{description}</span>
        </div>
    );
}

export default VideoDescription;
