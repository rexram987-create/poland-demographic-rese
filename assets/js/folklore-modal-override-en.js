(function(){
  function openFullStory(key){
    const data=window.FOLKLORE_STORIES_FULL_EN;
    if(!data||!data[key]) return false;
    const modal=document.getElementById('storyModal');
    const title=document.getElementById('modalTitle');
    const cat=document.getElementById('modalCategory');
    const body=document.getElementById('modalBody');
    if(!modal||!title||!cat||!body) return false;
    const s=data[key];
    cat.textContent=s.cat;
    title.textContent=s.title;
    body.innerHTML=s.body;
    modal.classList.add('open');
    document.body.style.overflow='hidden';
    return true;
  }
  document.addEventListener('click',function(event){
    const btn=event.target.closest&&event.target.closest('[data-story]');
    if(!btn) return;
    if(openFullStory(btn.dataset.story)){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  },true);
})();
