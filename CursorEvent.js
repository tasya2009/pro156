function handleMouseEnterEvents(event) {
    const id = event.target.id;
    this.setAttribute('tour', 'selected', id);
  }
  
  function handleMouseLeaveEvents() {
    this.setAttribute('tour', 'selected', null);
  }
  
  function handleMouseClickEvents(event) {
    const id = event.target.id;
    showView(id);
  }
  