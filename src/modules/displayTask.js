const displayTask = (object) => `<ul id="item-list" class="items">
        <li class="todo">
          <input id="submit-new-item-${object.index}" type="checkbox" title="" class="checkbox" name="checkbox-${object.index}" />
          <input class="task" id="label-checkbox-${object.index}" value ='${object.description}' type='text'/>
          
          <div class="settings">
            <ul class="task-menu">
              <li id='editbtn-${object.index}' class='editbtn'>
                <i class="uil uil-pen"></i>
                Edit
              </li>
              <li><i class="uil-trash1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button></i></li>
            </ul>
            
            <i class="material-symbols-outlined" id='threeBtn'>more_vert</i>
          </div>
          
        </li>
      </ul>`;

export default displayTask;