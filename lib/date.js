export const formatMyDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };

    return date.toLocaleDateString("en-US", options);
};

export const formatDuration = (duration) => {
    if (!duration) return null;

    var hour = Math.floor(duration / 3600);
    var min = Math.floor((duration % 3600) / 60);
    var sec = Math.floor((duration % 3600) % 60);

    const durationString = `${hour}:${min}:${sec}`;

    console.log(durationString);

    return durationString;
};
