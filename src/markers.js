export function getMarkers(activeIds) {

    let list = [];

    markers.forEach(element => {

        let isActive = activeIds.includes(element.id);

        list.push({
            id: element.id,
            name: element.name,
            coordinates: element.coordinates,
            isActive: isActive
        })
    });

    return list;

}


const markers = [
    {
        id: 1,
        name: "Himlabaden",
        coordinates: [17.289075083375486, 62.394040657166876]
    },
    {
        id: 2,
        name: "Lost City på Gustavik",
        coordinates: [15.194292311990083, 59.260323160175844]
    },
    {
        id: 3,
        name: "Maserhallen & aqua nova",
        coordinates: [15.411557827296596, 60.49202792492629]
    },
    {
        id: 4,
        name: "Medley Vilundabadet",
        coordinates: [17.919339027970643, 59.51731494690123]
    },
    {
        id: 5,
        name: "Eriksdalsbadet",
        coordinates: [18.075619429186784, 59.30494259556112]
    },
    {
        id: 6,
        name: "Vattenpalatset Vänerparken",
        coordinates: [12.317164457671774, 58.375867389201886]
    },
    {
        id: 7,
        name: "Halmstad Arena Äventyrsbad",
        coordinates: [12.888400041884172, 56.6746067972053]
    },
    {
        id: 8,
        name: "Rosenlundsbadet",
        coordinates: [14.228334191029864, 57.7863524055531]
    },
    {
        id: 9,
        name: "Arcusbadet",
        coordinates: [22.061892452748534, 65.59570087729706]
    },
    {
        id: 10,
        name: "Actic Lerum - Vattenpalatset",
        coordinates: [12.268923013777709, 57.77264527377351]
    }
];