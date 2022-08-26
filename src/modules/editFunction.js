import editResponse from './editResponse.js';

const editFunction = () => {
  const editBtns = document.querySelectorAll('.editbtn');
  editBtns.forEach((editbtn) => {
    editbtn.addEventListener('click', (e) => {
      e.preventDefault();
      editResponse();
    });
  });
};

export default editFunction;