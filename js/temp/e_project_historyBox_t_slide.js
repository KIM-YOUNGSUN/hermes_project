// e_project_historyBox_t_slide.js

// {
//   const historyPart = document.querySelector('.history_part');
//   const historyUl = historyPart.querySelector('.history_area');
//   // const historyLi = historyUl.querySelectorAll('li');
//   // const historyLiList = [].slice.call(historyLi);
//   const indicators = document.querySelector('.indicatorBox'); 


//   let historyLiList;
//   const fnLi = () => {
//     const historyLi = historyUl.querySelectorAll('li');
//     historyLiList = [].slice.call(historyLi);
//   }
//   fnLi();
//   console.log(historyLiList);

// // li값 파악
//   // const elLiMargin = parseInt(window.getComputedStyle(historyLiList[1]).marginLeft);
//   // const elLiWidth = historyLiList[1].clientWidth;
//   const elMoveWidth = 100;

//   const fnNext = function() {
//     historyUl.style.transition = 'margin 500ms ease'; 
//     historyUl.style.marginLeft = -elMoveWidth+'%';
//     setTimeout(()=>{
//       historyUl.append(historyLiList[0]);
//       fnLi();
//     historyUl.style = null;
//     }, 500) 
//   }

//   const fnPrev = function() {
//     historyUl.style.transition = 'margin 300ms ease';
//     historyUl.style.marginLeft = elMoveWidth+'%';
//     setTimeout(()=>{
//       historyUl.append(historyLiList[historyLiList.length-1]);
//       fnLi();
//     historyUl.style = null;
//     }, 500)
//   }

//   let remove;
//   const fnAuto = () => {
//     remove = setInterval(()=>{
//       fnNext();
//     }, 7000);
//   }
//   const fnStop = () => {
//     clearInterval(remove);
//   }
//   fnAuto();

//   // 이벤트

//   indicators.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const targetCheck = e.target.classList.contains('.indicator');
//     (targetCheck) ? fnNext() : fnPrev();
//   })

//   historyPart.addEventListener('mouseenter', fnStop);
//   historyPart.addEventListener('mouseleave', fnAuto);


// }

