const mainState = {
    users: [
        {
            login: 'Nikita',
            pass: 'Nikita',
            position: 'admin',
            check: false
        },
        {
            login: 'User',
            pass: 'User',
            position: "user",
            check: false
        }
    ],
    news: [
        {
            title: 'First title',
            desc: 'First desc',
            date: 'First date',
            visible: 'true'
        },
        {
            title: 'Second title',
            desc: 'Second desc',
            date: 'Second date',
            visible: 'true'
        },
        {
            title: 'Third title',
            desc: 'Third desc',
            date: 'Third date',
            visible: 'true'
        },
        {
            title: 'Fourth title',
            desc: 'Fourth desc',
            date: 'Fourth date',
            visible: 'true'
        },
        {
            title: 'Fifth title',
            desc: 'Fifth desc',
            date: 'Fifth date',
            visible: 'true'
        }
    ]
};

const mainReducer = (state = mainState, action) => {
    switch(action.type) {
        case 'ADD_NEWS' :
            return {
                ...state, news: [...state.news,
                    {
                        title: action.title, 
                        desc: action.desc, 
                        date: action.date,
                        visible: action.visible
                    }
                ]
            }
        case 'ADD_USER' :
            return {
                ...state, users: [...state.users,
                    {
                        login: action.login, 
                        pass: action.pass,
                        position: action.position
                    }
                ]
            }
        default : 
        return state
    }
}

export default mainReducer;