const Modal = ({ show, item, onClose }) => {
    if (!show) {
      return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
      document.createElement('div', { className: 'overlay' }, [
        document.createElement('div', { className: 'overlay-inner' }, [
          document.createElement('button', { className: 'close', onClick: onClose }, [
            document.createElement('i', { className: 'fas fa-times' })
          ]),
          document.createElement('div', { className: 'inner-box' }, [
            document.createElement('img', { src: thumbnail, alt: '' }),
            document.createElement('div', { className: 'info' }, [
              document.createElement('h1', null, [item.volumeInfo.title]),
              document.createElement('h3', null, [item.volumeInfo.authors]),
              document.createElement('h4', null, [
                item.volumeInfo.publisher,
                document.createElement('span', null, [item.volumeInfo.publishedDate])
              ]),
              document.createElement('br'),
              document.createElement('a', { href: item.volumeInfo.previewLink }, [
                document.createElement('button', null, ['More'])
              ])
            ])
          ]),
          document.createElement('h4', { className: 'description' }, [item.volumeInfo.description])
        ])
      ])
    );
  };
  
  export default Modal;
  