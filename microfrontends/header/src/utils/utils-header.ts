export const sendEventHelper = (nameEvent: string, value: object) => {
    const lanEvent = new CustomEvent(nameEvent, {
        detail: value,
    });
    window.dispatchEvent(lanEvent);
};

