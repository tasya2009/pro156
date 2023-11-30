AFRAME.registerComponent('tour', {
    init: function () {
      
      const places = [
        { id: 'place0', title: 'Place 1', thumbnail: 'thumbnail1.jpg' },
        
      ];
  
      places.forEach((place) => {
        createPlace(place.id, place.title, place.thumbnail);
      });
  
      
      this.state = { selected: null };
  
      
      this.el.addEventListener('mouseenter', handleMouseEnterEvents);
      this.el.addEventListener('mouseleave', handleMouseLeaveEvents);
      this.el.addEventListener('click', handleMouseClickEvents);
    },
  });
  
  function createPlace(id, title, thumbnail) {
    const container = document.getElementById('placesContainer');
    const place = document.createElement('a-entity');
    place.setAttribute('id', id);
    place.setAttribute('tour-place', { title: title, thumbnail: thumbnail });
    container.appendChild(place);
  
    createThumbnail(place, thumbnail);
    createTitle(place, title);
  }
  
  function createThumbnail(place, thumbnail) {
    const thumbnailEntity = document.createElement('a-entity');
    thumbnailEntity.setAttribute('geometry', {
      primitive: 'plane',
      width: 1,
      height: 0.5,
    });
    thumbnailEntity.setAttribute('material', { src: thumbnail });
    place.appendChild(thumbnailEntity);
  }
  
  function createTitle(place, title) {
    const titleEntity = document.createElement('a-entity');
    titleEntity.setAttribute('text', { value: title, align: 'center' });
    titleEntity.setAttribute('position', { y: -0.75 });
    place.appendChild(titleEntity);
  }
  
  function showView(id) {
    const panorama = document.getElementById('panorama');
    panorama.setAttribute('src', `#${id}`);
  }
  
  function hideEl(el) {
    el.setAttribute('visible', false);
  }
  