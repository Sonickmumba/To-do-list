const displayTask = (object) => `<ul id="item-list" class="items">
        <li class="todo">
          <input id="submit-new-item-${object.index}" type="checkbox" title="" class="checkbox" name="checkbox-${object.index}" />
          <input class="task" id="label-checkbox-${object.index}" value ='${object.description}' type='text'/>
        
          <div class='drag'>
            <button type='button' id='delete'>Delete</button>
          </div>
          
        </li>
      </ul>`;

export default displayTask;

/* <div class="settings">
            <ul class="task-menu">
              <li id='editbtn-${object.index}' class='editbtn'>
                <i class="uil uil-pen"></i>
                Edit
              </li>
              <li><i class="uil uil-trash"></i>Delete</li>
            </ul>
            <i class="material-symbols-outlined" id='threeBtn'>more_vert</i>
          </div> */

/* <div class='drag'>
            <span><i class="uil uil-trash"></i>Delete</span>
          </div> */