//разметка модального окна
function createModalAdd() {
  const modal = document.createElement('div');
  const form = document.createElement('form');
  const modalHeader = document.createElement('div');
  const modalTitle = document.createElement('span');
  const modalId = document.createElement('span');
  const modalClose = document.createElement('span');
  const modalBody = document.createElement('div');
  const inputName = document.createElement('input');
  const inputSurname = document.createElement('input');
  const inputLastName = document.createElement('input');
  const labelName = document.createElement('label');
  const labelSurname = document.createElement('label');
  const labelLastName = document.createElement('label');
  const modalFooter = document.createElement('div');
  const modalFooterAddContact = document.createElement('div');
  const clickAdd = document.createElement('div');
  const icon = document.createElement('div');
  const spanTextAddContact = document.createElement('div');
  const error = document.createElement('div');
  const errorContact = document.createElement('div');
  const btnSave = document.createElement('button');
  const buttonCancel = document.createElement('button');
  const spamStarName = document.createElement('span');
  const spamStarSurname = document.createElement('span');
  const surnameError = document.createElement('span');
  const nameError = document.createElement('span');
  const lastNameError = document.createElement('span');


  modal.classList.add('modal-overlay');
  form.classList.add('modal-window');
  form.id = 'form';
  modalHeader.classList.add('modal-header');
  modalTitle.classList.add('modal-title');
  modalId.classList.add('modal-id');
  modalClose.classList.add('modal-close');
  modalBody.classList.add('modal-body');
  inputName.classList.add('inputs', 'name');
  inputName.type = 'text';
  inputSurname.classList.add('inputs', 'surname');
  inputSurname.type = 'text';
  inputLastName.classList.add('inputs', 'patronymic');
  inputLastName.type = 'text';
  labelLastName.classList.add('label', 'label-lastName');
  labelLastName.for = 'patronymic';
  labelSurname.classList.add('label', 'label-surname');
  labelSurname.for = 'surname';
  labelName.classList.add('label', 'label-name');
  labelName.for = 'patronymic';
  labelName.id = 'name';
  labelSurname.id = 'surname';
  labelLastName.id = 'lastname';
  modalFooter.classList.add('modal-footer')
  clickAdd.classList.add('click-addContact')
  icon.classList.add('form-add__icon')
  spanTextAddContact.classList.add('form-add__text')
  modalFooterAddContact.classList.add('modal-footer__addContact');
  error.classList.add('errors');
  errorContact.classList.add('errors-contact');
  btnSave.classList.add('btn', 'btn-save');
  buttonCancel.classList.add('btn-cancel');
  spamStarName.classList.add('span-star');
  spamStarSurname.classList.add('span-star');
  nameError.classList.add('errors', 'error-name');
  surnameError.classList.add('errors', 'error-surname');
  lastNameError.classList.add('errors', 'error-last-name');


  nameError.textContent = 'некорректно введено имя';
  surnameError.textContent = 'некорректно введена фамилия';
  lastNameError.textContent = 'некорректно введено отчество';



  modalHeader.append(modalTitle);
  modalHeader.append(modalId);
  modalHeader.append(modalClose);
  form.append(modalHeader);
  modalBody.append(surnameError);
  modalBody.append(inputSurname);
  modalBody.append(labelSurname);
  modalBody.append(nameError);
  modalBody.append(inputName);
  modalBody.append(labelName);
  modalBody.append(lastNameError);
  modalBody.append(inputLastName);
  modalBody.append(labelLastName);
  form.append(modalBody);
  modalFooter.append(modalFooterAddContact);
  modalFooterAddContact.append(clickAdd);
  clickAdd.append(icon);
  clickAdd.append(spanTextAddContact);
  modalFooter.append(error);
  modalFooter.append(errorContact);
  modalFooter.append(btnSave);
  modalFooter.append(buttonCancel);
  form.append(modalFooter);
  modal.append(form);


  modalTitle.textContent = 'Новый клиент';
  labelName.textContent = 'Имя';
  labelLastName.textContent = 'Отчество';
  labelSurname.textContent = 'Фамилия';
  spamStarSurname.textContent = '*';
  spamStarName.textContent = '*';
  icon.innerHTML = '<span>+</span>';
  spanTextAddContact.textContent = 'Добавить контакт';
  btnSave.textContent = 'Сохранить';
  buttonCancel.textContent = 'Отмена';
  labelName.append(spamStarName);
  labelSurname.append(spamStarSurname);

  return {
    clickAdd,
    modalId,
    btnSave,
    modal,
    inputName,
    inputSurname,
    inputLastName,
    labelName,
    labelSurname,
    labelLastName,
    modalClose,
    buttonCancel,
    modalFooterAddContact,
    error,
    errorContact,
    nameError,
    surnameError,
    lastNameError
  }

}

//Функция удаления контакта
function createModalDel() {
  const modal = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalTitle = document.createElement('span');
  const modalClose = document.createElement('span');
  const modalBody = document.createElement('div');
  const modalText = document.createElement('div');
  const modalFooter = document.createElement('div');
  const modalButton = document.createElement('div');
  const modalButtonCancel = document.createElement('button');
  const modalWindow = document.createElement('button');
  const error = document.createElement('div');

  modal.classList.add('modal-overlay');
  modalHeader.classList.add('modal-header');
  modalTitle.classList.add('modal-title');
  modalClose.classList.add('modal-close');
  modalBody.classList.add('modal-body');
  modalText.classList.add('modal-text');
  modalFooter.classList.add('modal-footer');
  modalButton.classList.add('btn', 'btn-del');
  modalButtonCancel.classList.add('btn-cancel');
  modalWindow.classList.add('modal-window');
  error.classList.add('errors');

  modalTitle.textContent = 'Удалить клиента';
  modalText.textContent = 'Вы действительно хотите удалить данного клиента';
  modalButton.textContent = 'Удалить';
  modalButtonCancel.textContent = 'Отмена';


  modalHeader.append(modalTitle, modalClose);
  modalBody.append(modalText);
  modalFooter.append(error, modalButton, modalButtonCancel);
  modalWindow.append(modalHeader, modalBody, modalFooter);
  modal.append(modalWindow);

  return {
    modal,
    modalClose,
    modalButtonCancel,
    error

  }

}

// Функция создания кнопки добавления и выюора контактов
function createOption() {
  const selectDiv = document.createElement("div");
  selectDiv.classList.add("modalContact");
  selectDiv.insertAdjacentHTML(
    "afterbegin",
    `<select class="contact">
    
    <option class="option tel" value="tel">Телефон</option>
    <option value="tel" class="option additionalTel">Доп.телефон</option>
    <option class="option email" value="email">Email</option>
     <option class="option VK" value="VK">VK</option>
     <option class="option other" value="other">Другие</option>
    <input id='addContact' type='tel' data-validate-field='tel' data-name='tel' class='inputContact' placeholder='Введите данные контакта'><div class="del"><svg class="icon-del" width="27" height="37" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect x="0.5" y="0.5" width="26" height="36" fill="#E7E5EB" stroke="#C8C5D1"/>
    <path d="M14 13C10.682 13 8 15.682 8 19C8 22.318 10.682 25 14 25C17.318 25 20 22.318 20 19C20 15.682 17.318 13 14 13ZM14 23.8C11.354 23.8 9.2 21.646 9.2 19C9.2 16.354 11.354 14.2 14 14.2C16.646 14.2 18.8 16.354 18.8 19C18.8 21.646 16.646 23.8 14 23.8ZM16.154 16L14 18.154L11.846 16L11 16.846L13.154 19L11 21.154L11.846 22L14 19.846L16.154 22L17 21.154L14.846 19L17 16.846L16.154 16Z" fill="#B0B0B0"/>
    </svg></div></select><div class='error-contact'></div>`
  );
  return selectDiv;
}

//Функция создания модального окна
function modal(options) {
  const modal = document.createElement("div");
  modal.classList.add("smodal");
  modal.append(options);
  document.body.append(modal);
  const ANIMATION_SPEED = 200;
  let closing = false;

  return {
    open() {
      !closing && modal.classList.add("open");
      closing = true;
    },
    close() {
      if (closing) {
        closing = true;
        modal.classList.remove("open");
        modal.classList.add("hide");
        setTimeout(() => {
          modal.classList.remove("hide");
          closing = false;
        }, ANIMATION_SPEED);
      }
    },
    modal

  };
}

//   Добавление 0 перед датой
function twoDigits(num) {
  if (num < 10) {
    return ("0" + num).slice(-2);
  } else {
    return num;
  }
}


// Регулярные выражения

const names = /^[A-Za-zA-Яа-яЁё_-]{3,16}$/;
const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const letter = /[^]{3}$/;
const modalClose = createModalDel();
const saveHtml = createModalAdd();

(async () => {
  const response = await fetch("http://localhost:3000/api/clients"); //получение данных с сервера
  const dataTable = await response.json();



  //функция загрузки таблицы с сервера
  async function createTable(json, sortIdOne = true) {

    if (sortIdOne) {
      json.sort((prev, next) => next["id"] - prev["id"]); //сортировка таблицы по умолчанию
      sortIdOne = false;
    }

    const table = document.querySelector(".table");
    const tbody = document.createElement("tbody");
    tbody.classList.add("tbody");
    json.forEach((el) => {
      let contactsTd = "";
      const contacts = el.contacts;
      contacts.forEach((contact) => {
        if (contact.type === "tel") {
          contactsTd += `<span class="iconContact" data-tooltip="${contact.value}"><svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
            <circle class="iconFill" cx="8" cy="8" r="8" fill="#9873FF"/>
            <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
            </g>
            </svg></span>
            `;
        }

        if (contact.type === "email") {
          contactsTd += `<span class="iconContact" data-tooltip="${contact.value}">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="iconFill" opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
                </svg>
               </span>`;

        }
        if (contact.type === "VK") {
          contactsTd += `<span class="iconContact" data-tooltip="${contact.value}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
            <path class="iconFill" d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
            </g>
            </svg></span>`;

        }
        if (contact.type === "other") {
          contactsTd += `<span class="iconContact" data-tooltip="${contact.value}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="iconFill" opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
            </svg></span>`;
        }
      });

      const build = new Date(el.createdAt);
      const change = new Date(el.updatedAt);
      tbody.insertAdjacentHTML(
        "afterbegin",
        `<tr>
        <td class="id">${el.id}</td>
        <td class="fullName">${el.surname} ${el.name} ${el.lastName}</td>
        <td class="dateBuild">${twoDigits(build.getDate())}.${twoDigits(
          build.getMonth()
        )}.${build.getFullYear()}<span>${twoDigits(
          build.getHours()
        )}:${twoDigits(build.getMinutes())}</span></td>
        <td class="dateChange">${twoDigits(change.getDate())}.${twoDigits(
          change.getMonth()
        )}.${change.getFullYear()}<span>${twoDigits(
          change.getHours()
        )}:${twoDigits(change.getMinutes())}</span></td>
        <td class="tbody-contacts"><div class="tbody-contacts_flex">${contactsTd}</div></td>
        <td><span class="change">изменить</span>
        <span class="delete">удалить</span></td>
    </tr>`
      );
    });

    // Анимация в tbody
    tbody.insertAdjacentHTML(
      "afterbegin",
      `<div class="loader">
    <div class="loader-preload">
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.00025 40.0005C4.00025 59.8825 20.1182 76.0005 40.0002 76.0005C59.8822 76.0005 76.0002 59.8825 76.0002 40.0005C76.0002 20.1185 59.8823 4.00049 40.0003 4.00049C35.3513 4.00048 30.9082 4.88148 26.8282 6.48648" stroke="#9873FF" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
    </div>
</div>`);
    table.appendChild(tbody);

    // модальное окно изменения клиента
    const btnDels = document.querySelectorAll(".delete");
    const btnChanges = document.querySelectorAll(".change");
    btnChanges.forEach(async (btnChange, ind) => {
      document.querySelector('.click-addContact').style.opacity = '1';
      const id = document.querySelectorAll(".id")[ind];
      btnChange.addEventListener("click", async () => {
        btnChange.classList.add("change-anime"); //добавление к кнопке анимации

        closeModal(
          saveHtml.modal,
          saveHtml.modalClose,
          saveHtml.buttonCancel,
          modalAdd
        );

        const spanId = saveHtml.modalId;
        spanId.textContent = `ID: ${id.textContent}`;

        //Поличение клиента с сервера
        const changeClient = await fetch(
          `http://localhost:3000/api/clients/${id.textContent}`, {
            method: "GET",
          }
        );
        const data = await changeClient.json();
        modalAdd.open();

        const inputContacts = [saveHtml.inputSurname, saveHtml.inputName, saveHtml.inputLastName];
        inputContacts[0].value = data.surname;
        inputContacts[1].value = data.name;
        inputContacts[2].value = data.lastName;
        let count = 0;
        inputContacts.forEach((input, ind) => {
          if (input.value.length > 0) {
            label[ind].classList.add('label-up');
          } else {
            label[ind].classList.remove('label-up');
          }
        });
        data.contacts.forEach((el) => {

          var im = new Inputmask("+7 (999)-999-99-99");
          if (el.type === "tel" && count === 0) {
            const selectDiv = createOption();
            selectDiv.querySelector(".tel").selected = true;
            selectDiv.querySelector("input").type = "tel";
            selectDiv.querySelector("input").value = el.value;
            selectDiv.querySelector("input").dataset.name = "tel";
            selectDiv.querySelector("input").setAttribute("data-validate-field", "tel");
            choice(selectDiv);
            im.mask(selectDiv.querySelector("input"));
            addContact.before(selectDiv);
            count++;

          } else if (el.type === "tel" && count > 0) {
            const selectDiv = createOption();
            selectDiv.querySelector(".additionalTel").selected = true;
            selectDiv.querySelector("input").type = "tel";
            selectDiv.querySelector("input").value = el.value;
            selectDiv.querySelector("input").dataset.name = "tel";
            choice(selectDiv);
            im.mask(selectDiv.querySelector("input"));
            addContact.before(selectDiv);
            count++;
          }

          if (el.type === "email") {
            const selectDiv = createOption();
            selectDiv.querySelector(".email").selected = true;
            selectDiv.querySelector("input").type = "email";
            selectDiv.querySelector("input").value = el.value;
            selectDiv.querySelector("input").dataset.name = "email";
            choice(selectDiv);
            addContact.before(selectDiv);
          }

          if (el.type === "VK") {
            const selectDiv = createOption();
            selectDiv.querySelector(".VK").selected = true;
            selectDiv.querySelector("input").type = "VK";
            selectDiv.querySelector("input").value = el.value;
            selectDiv.querySelector("input").dataset.name = "VK";
            choice(selectDiv);
            addContact.before(selectDiv);
          }

          if (el.type === "other") {
            const selectDiv = createOption();
            selectDiv.querySelector(".other").selected = true;
            selectDiv.querySelector("input").type = "other";
            selectDiv.querySelector("input").value = el.value;
            selectDiv.querySelector("input").dataset.name = "other";
            choice(selectDiv);
            addContact.before(selectDiv);
          }

        });



        changeSelector();
        btnChange.classList.remove("change-anime"); // удаление класса с анимацией
        document.querySelectorAll('.js-validate-error-label').forEach(el => el.remove()); //удалние элемента валидации что-бы оно случайным образом не попало в модальное окно  из добавления клиента
        document.querySelectorAll('.js-validate-error-field').forEach(el => {
          el.style = "";
          el.classList.remove('js-validate-error-field');
        }); //удаление класса и стилей валидации
        document.querySelectorAll(".modal-title").forEach((el) => (el.textContent = "Изменить контакт")); //изменение заголовка модального окна
        delContact();
        btnSave.onclick = (e) => {
          e.preventDefault();
          const val = validation();
          if (val) {
            saveModal("PATCH", id.textContent);
            modalAdd.close();
            return false;
          }
          return false;
        }

      });


    });

    // Назначение слушателя для вызова фунции удаления
    btnDels.forEach((btnDel, ind) => {
      btnDel.addEventListener("click", () => deleteModal(modalDel, ind));
    });

    document.querySelector(".loader").classList.add("preloader-remove");
  }

  createTable(dataTable); //создание таблица, сортировка по умолчанию по ID

  // функция удаления поля контактов
  function delContact() {
    const del = document.querySelectorAll(".del");
    del.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        del[i].parentNode.remove();
        document.querySelector('.click-addContact').style.opacity = '1';
      });
    });

  }



  function changeSelector() {

    const inputContacts = document.querySelectorAll(".inputContact");
    const selects = document.querySelectorAll("select");
    selects.forEach((select, i) => {
      select.addEventListener('change', (e) => {
        const value = e.target.children[0].value;

        if (value === "tel") {
          inputContacts[i].dataset.name = "tel";
          inputContacts[i].type = "tel";
          im.mask(inputContacts[i]);
        }
        if (value === "additionalTel") {
          inputContacts[i].dataset.name = "addTel";
          inputContacts[i].type = "tel";
          im.mask(inputContacts[i]);
        }
        if (value === "email") {
          Inputmask.remove(inputContacts[i]);
          inputContacts[i].dataset.name = "email";
          inputContacts[i].type = "email";
        }
        if (value === "VK") {
          Inputmask.remove(inputContacts[i]);
          inputContacts[i].dataset.name = "VK";
          inputContacts[i].type = "VK";

        }
        if (value === "other") {
          Inputmask.remove(inputContacts[i]);
          inputContacts[i].dataset.name = "other";
          inputContacts[i].type = "text";

        }
      });
    });
  }

  //Choice
  function choice(elem) {
    const element = elem.querySelector(".contact");
    const choice = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
    });
  }


  // сортировка по ID
  let sortId = true;
  const btnId = document.querySelector(".thead-Id");
  btnId.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/api/clients"); //получение данных с сервера
    const dataTable = await response.json();
    document.querySelectorAll(".tbody").forEach((tbody) => tbody.remove());
    if (sortId) {
      btnId.classList.add("thead-Id_rotate");
      dataTable.sort((prev, next) => prev["id"] - next["id"]);
      sortId = false;
    } else {
      btnId.classList.remove("thead-Id_rotate");
      dataTable.sort((prev, next) => next["id"] - prev["id"]);
      sortId = true;
    }
    createTable(dataTable, sortIdOne = false); //создание сортированной таблицы
  });

  // сортировка по алфавиту
  const btnName = document.querySelector(".thead-name");
  const az = document.querySelector(".thead-name-az");
  let sortAz = true;
  btnName.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/api/clients"); //получение данных с сервера
    const dataTable = await response.json();
    document.querySelectorAll(".tbody").forEach((tbody) => tbody.remove());
    if (sortAz) {
      dataTable.sort((prev, next) => {
        if (prev["surname"] < next["surname"]) return 1;
        if (prev["surname"] > next["surname"]) return -1;
      });
      az.textContent = "А-Я";
      sortAz = false;
    } else {
      dataTable.sort((prev, next) => {
        if (prev["surname"] < next["surname"]) return -1;
        if (prev["surname"] > next["surname"]) return 1;
      });
      az.textContent = "Я-А";
      sortAz = true;
    }
    createTable(dataTable, sortIdOne = false); //создание сортированной таблицы
  });

  const btnBuild = document.querySelector(".thead-build"),
    btnChange = document.querySelector(".thead-change");
  let sortBuild = true,
    sortChange = true;

  // сортировка по дате создания
  btnBuild.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/api/clients"); //получение данных с сервера
    const dataTable = await response.json();
    document.querySelectorAll(".tbody").forEach((tbody) => tbody.remove());
    if (sortBuild) {
      btnBuild.classList.add("thead-Id_rotate");
      dataTable.sort((prev, next) => {
        sortBuild = false;
        return new Date(prev["createdAt"]) - new Date(next["createdAt"]);
      });
    } else {
      btnBuild.classList.remove("thead-Id_rotate");
      sortBuild = true;
      dataTable.sort((prev, next) => {
        return new Date(next["createdAt"]) - new Date(prev["createdAt"]);
      });
    }
    createTable(dataTable, sortIdOne = false);
  });

  //сортировка по дате изменения
  btnChange.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/api/clients"); //получение данных с сервера
    const dataTable = await response.json();
    document.querySelectorAll(".tbody").forEach((tbody) => tbody.remove());
    if (sortChange) {
      btnChange.classList.add("thead-Id_rotate");
      dataTable.sort((prev, next) => {
        sortChange = false;
        return new Date(prev["updatedAt"]) - new Date(next["updatedAt"]);
      });
    } else {
      btnChange.classList.remove("thead-Id_rotate");
      sortChange = true;
      dataTable.sort((prev, next) => {
        return new Date(next["updatedAt"]) - new Date(prev["updatedAt"]);
      });
    }
    createTable(dataTable, sortIdOne = false);
  });

  //функция удаления клиента
  async function deleteModal(modalDel, ind) {
    modalDel.open();
    document.querySelectorAll(".modal-title").forEach((el) => (el.textContent = "Удалить контакт")); // изменение заголовка окна
    closeModal(
      modalClose.modal,
      modalClose.modalButtonCancel,
      modalClose.modalClose,
      modalDel
    );
    modalClose.error.textContent = '';
    const del = modalDel.modal.querySelector(".btn-del");
    del.onclick = async (e) => {
      e.preventDefault();
      const id = document.querySelectorAll(".id")[ind];
      try {
        const delClient = await fetch(`http://localhost:3000/api/clients/${id.textContent}`, {
          method: "DELETE",
        });
        let status = delClient.ok;
        if (status) {
          const respons = await fetch("http://localhost:3000/api/clients"); //получение данных с сервера
          const dataTable = await respons.json();
          const tbody = document.querySelector('tbody');
          if (tbody) {
            tbody.remove();
          }
          createTable(dataTable);
          modalDel.close();
        } else if (status === false) {
          modalClose.error.textContent = `Ошибка ${delClient.status} (${delClient.statusText})`;
          return;
        } else {

          return;
        }
      } catch (err) {
        modalClose.error.textContent = "Что-то пошло не так...";
      }
      return false;

    };

  }

  const modalDel = modal(modalClose.modal),
    modalAdd = modal(saveHtml.modal),
    label = [saveHtml.labelSurname, saveHtml.labelName, saveHtml.labelLastName],
    addContact = saveHtml.clickAdd,
    buttonAdd = document.querySelector(".button-add"),
    modalFooterAdd = saveHtml.modalFooterAddContact,
    btnSave = saveHtml.btnSave,
    errorsDiv = saveHtml.error,
    errorsContact = saveHtml.errorContact,
    inputNames = document.querySelectorAll(".inputs");

  //Функция закрытия модального окна
  function closeModal(modalOver, close, cancel, modal) {
    saveHtml.nameError.classList.remove('error-visible');
    saveHtml.surnameError.classList.remove('error-visible');
    saveHtml.lastNameError.classList.remove('error-visible');

    modalOver.addEventListener("click", (e) => {
      if (
        e.target === modalOver ||
        e.target === close ||
        e.target === cancel
      ) {
        modal.close();
        document
          .querySelectorAll(".modalContact")
          .forEach((el) => el.remove());
      }
      

      //Стирание записи ошибок
      if (e.target !== btnSave) {
        errorsDiv.innerHTML = "";
      }
      if (e.target != addContact) {
        errorsContact.innerHTML = "";
      }
      
    });

  }


  //функция валидации 
  function validation() {
    let accept = true;
    const formInputs = document.querySelectorAll(".inputs");
    const errorsName = [saveHtml.nameError, saveHtml.surnameError, saveHtml.lastNameError];
    formInputs.forEach((el) => el.oninput = () => {
      errorsName[0].classList.remove('error-visible');
      errorsName[1].classList.remove('error-visible');
      errorsName[2].classList.remove('error-visible');
    });

    if (!names.test(saveHtml.inputSurname.value)) {
      errorsName[1].classList.add('error-visible');
      accept = false;
    } else {
      accept = true;
    }

    if (!names.test(saveHtml.inputName.value)) {
      errorsName[0].classList.add('error-visible');
      accept = false;
    } else {
      accept = true;
    }

    if (saveHtml.inputLastName.value.length > 0) {
      if (!names.test(saveHtml.inputLastName.value)) {
        errorsName[2].classList.add('error-visible');
        accept = false;
      } else {
        accept = true;
      }
    }

    const inputContact = document.querySelectorAll('.inputContact');
    const errorContact = document.querySelectorAll('.error-contact');

    inputContact.forEach((el, i) => {
      el.oninput = () => errorContact[i].textContent = '';
      if (el.dataset.name === 'email') {

        if (!email.test(el.value)) {
          errorContact[i].textContent = 'Введите корректный Email';
          accept = false;
        } else {
          errorContact[i].textContent = '';
          accept = true;
        }
      }
      if (el.dataset.name === 'VK') {
        if (!url.test(el.value)) {
          errorContact[i].textContent = 'Введите корректный адрес';
          accept = false;
        } else {
          errorContact[i].textContent = '';
          accept = true;
        }
      }
      if (el.dataset.name === 'other') {
        if (!letter.test(el.value)) {
          errorContact[i].textContent = 'Символов должно быть больше 3';
          accept = false;
        } else {
          errorContact[i].textContent = '';
          accept = true;
        }
      }

    });
    return accept;
  }
  //Добавление/удаление надписи в input в модальном окне
  inputNames.forEach((input, ind) => {
    input.addEventListener("input", () => {
      if (input.value.length > 0) {
        label[ind].classList.add('label-up');
      } else {
        label[ind].classList.remove('label-up');
      }
    });
  });


  //Открытие окна сохранения контактов
  buttonAdd.addEventListener("click", () => {
    document.querySelector('.click-addContact').style.opacity = '1';
    modalAdd.open();
    closeModal(
      saveHtml.modal,
      saveHtml.modalClose,
      saveHtml.buttonCancel,
      modalAdd
    );
    document
      .querySelectorAll(".modal-title")
      .forEach((el) => (el.textContent = "Новый клиент"));



    saveHtml.modalId.textContent = "";
    const formInputs = document.querySelectorAll(".inputs");
    const inputContact = document.querySelectorAll(".modalContact");
    label.forEach(el => el.classList.remove('label-up'));
    formInputs.forEach((input) => (input.value = ""));
    inputContact.forEach(input => input.remove());
    saveHtml.btnSave.onclick = async (e) => {
      e.preventDefault();
      const val = validation();
      if (val) {
        saveModal("POST");


      }
      return false;
    };

  });


  // Добавление контактов
  var im = new Inputmask("+7 (999)-999-99-99");
  saveHtml.clickAdd.addEventListener("click", async (e) => {
    const selectDiv = createOption();
    if (document.querySelectorAll(".inputContact").length < 10) { // Контактов не должно быть больше 10
      document.querySelector('.click-addContact').style.opacity = '1';
      modalFooterAdd.insertBefore(selectDiv, addContact);
      document.querySelectorAll(".inputContact").forEach(el => {
        if (el.type == 'tel') {
          im.mask(el);
        }

      });

      changeSelector();
      choice(selectDiv); // изменения селекта

    } else {
      document.querySelector('.click-addContact').style.opacity = '0';
      errorsContact.innerHTML = "Слишком много контаков"; // Вывод ошибки что контактов слишком много

    }
    delContact();
  });


  // Функция сохранения данных из модального окна на сервере
  async function saveModal(method, id = "") {
    const surname = document.querySelector(".surname");
    const name = document.querySelector(".name");
    const patronymic = document.querySelector(".patronymic");
    const inputContacts = document.querySelectorAll(".inputContact");

    let contact = [];
    inputContacts.forEach(async (el, i) => {
      const obj = {};
      obj.type = el.dataset.name;
      obj.value = el.value;
      contact.push(obj);
    });

    try {
      const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: `${method}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          surname: surname.value,
          lastName: patronymic.value,
          contacts: contact,
        }),
      });
      let status = response.ok;
      if (status) {
        const data = await response.json();
        const respons = await fetch("http://localhost:3000/api/clients"); //получение данных с сервера
        const dataTable = await respons.json();
        const tbody = document.querySelector('tbody');
        if (tbody) {
          tbody.remove();
        }
        createTable(dataTable);

        // Обработка ошибок с сервера
        let errors = "";
        if (data.errors) {
          data.errors.forEach((er) => {
            errors += `${er.message}<br> `;
          });
          errorsDiv.innerHTML = errors;
        } else if (data === undefined || null) {
          errorsDiv.innerHTML = "Что-то пошло не так...";
        }
        document.querySelectorAll('.modalContact').forEach(el => el.remove());
        modalAdd.close();
      } else if (status === false) {
        errorsDiv.innerHTML = `Ошибка ${response.status} (${response.statusText})`
        return;
      } else {
        errorsDiv.innerHTML = "Что-то пошло не так...";
        return;
      }
    } catch (err) {
      errorsDiv.innerHTML = "Что-то пошло не так...";
    }
  }

  // Фильтрация
  async function filterTable() {
    const filters = document.querySelector(".filter-input");
    let tiemout;
    filters.addEventListener("input", async (e) => {
      const tbody = document.querySelector("tbody");
      clearTimeout(tiemout);
      tiemout = setTimeout(async () => {
        if (tbody) {
          tbody.remove();
        }
        const response = await fetch(`http://localhost:3000/api/clients?search=${filters.value}`, {
          method: "GET",
        });
        const data = await response.json();
        createTable(data);
      }, 300);
    });
  }
  filterTable();
})();