import React from "react";
import "./style.css";

export const App = () => {

    //TODOリストの移動にはuseStateを使って実装する。
    const [incompleteTodos, setIncompleteTodos] = useState(["入力されたTODO1", "入力されたTODO2"]);
    return (
        <>
            <div className="input-area">
                <input placeholder="TODOを入力" />
                <button>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    { incompleteTodos.map(() => {
                        
                    }) }

                    <div className="list-row">
                    <li>入力されたTODO1</li>
                    <button>完了</button>
                    <button>削除</button>
                    </div className="list-row">
                    <div>
                    <li>入力されたTODO2</li>
                    <button>完了</button>
                    <button>削除</button>
                    </div>
                </ul>

            </div>
            <div className="complete-area">
            <p className="title">完了したTODO</p>
                <ul>
                    <div className="list-row">
                    <li>完了TODO1</li>
                    <button>戻す</button>
                    </div>
                   
                </ul>
            </div>
        </>
    );
};

