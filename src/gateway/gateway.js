const baseUrl = 'https://63b546be0f49ecf5089f80a7.mockapi.io/events';
export const fetchEventsList = () => {
  return fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw new Error('Internal Server Error. Can\'t display events');
    }
    return res.json();
  })
  .then(eventsList => eventsList.map(event => ({
      ...event,
      dateFrom: new Date(event.dateFrom),
      dateTo: new Date(event.DateTo),
    })),
    );
};
export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData)
}).then(response => {
  if (!response.ok) {
    throw new Error('Internal Server Error. Can\'t display events');
  }
  });
};

export const deleteEvent = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error('Internal Server Error. Can\'t display events');      
    }
  });
};


