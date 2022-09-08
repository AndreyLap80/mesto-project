const url = 'https://nomoreparties.co/v1/plus-cohort-14'
const headers = {
  'Authorization': '5a9cae72-b390-4257-b620-5f35d3f837bc',
  'Content-Type': 'application/json'
}

function thenRes(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Что-то пошло не так: ${res.status}`);
}

export function initialCards() {
  return fetch(`${url}/cards`, { headers })
    .then(thenRes)
}

export function newCards(newCard) {
  return fetch(`${url}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name: newCard.name,
      link: newCard.link
    }),
    headers
  })
    .then(thenRes)
}

export function meInfo() {
  return fetch(`${url}/users/me`,
    { headers },
  )
    .then(thenRes)
}

export function editingProfile(newProfile) {
  return fetch(`${url}/users/me`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        name: newProfile.name,
        about: newProfile.about
      }),
      headers
    },
  )
    .then(thenRes)
}

export function deleteCards(delCard) {
  return fetch(`${url}/cards/${delCard}`,
    {
      method: 'DELETE',
      headers
    },
  )
    .then(thenRes)
}

export function likesFetch(likeCard) {
  return fetch(`${url}/cards/likes/${likeCard}`,
    {
      method: 'PUT',
      headers
    },
  )
    .then(thenRes)

}

export function likesDeleteFetch(likeDel) {
  return fetch(`${url}/cards/likes/${likeDel}`,
    {
      method: 'DELETE',
      headers
    },
  )
    .then(thenRes)

}

export function editAvatar(newAvatar) {
  return fetch(`${url}/users/me/avatar`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: newAvatar
      }),
      headers
    },
  )
    .then(thenRes)
}
