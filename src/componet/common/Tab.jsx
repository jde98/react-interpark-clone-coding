function Tab(props){

    const tabClick = (clickItem) => {

        const array = props.tabList.map((value) => value.id);

        array.forEach(item => {
            if(item === clickItem){
                document.getElementById(item).classList.add("front");
                document.getElementById(item).classList.remove("back");
            } else {
                document.getElementById(item).classList.add("back");
                document.getElementById(item).classList.remove("front");
            }
        });
    }

    let tabLengthStyle = {
        "width" : props.tabList.length * 230 + "px"
    } 
    
    return(
        <div className='login_tab' style={tabLengthStyle}>
            {
                props.tabList.map((value, index) => 
                    <div    id={value.id} 
                            className={index === 0 ? "front" : "back"} 
                            onClick={() => tabClick(value.id)}
                            key={index}>
                        {value.title}
                    </div>
                )
            }
        </div>
    )
}

export default Tab;