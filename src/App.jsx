import { useState } from 'react';
import './assets/styles/App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    phone_number: ''
  });
  
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseMessage('');
    setError('');
    
    fetch('http://localhost:3008/customers', {
      method: 'POST',
      credentials: 'include', // Importante para recibir y enviar cookies
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      // Verificar si la respuesta contiene cookies
      console.log('Response headers:', response.headers);
      return response.json().then(data => {
        if (!response.ok) {
          throw new Error(data.error || 'Ocurrió un error');
        }
        return data;
      });
    })
    .then(data => {
      console.log('Success:', data);
      setResponseMessage(`Usuario ${data.customer.name} creado exitosamente`);
      
      // Verificar las cookies después de la respuesta
      console.log('Cookies actuales:', document.cookie);
    })
    .catch(error => {
      console.error('Error:', error);
      setError(error.message);
    });
  };

  const handleCheck = async () => {
    try {
    const response = await fetch('http://localhost:3008/customers/check-session', {
      method: 'GET',
      credentials: 'include'
    });

    const data = await response.json();

    if (response.ok && data.isAuthenticated) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  } catch (err) {
    console.error('Auth error:', err);
    setUser(null);
  }
  }

  return (
    <>
      <h1>Welcome to client demo!</h1>
      
      {responseMessage && <div className="success-message">{responseMessage}</div>}
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleCheck}>Check session</button>
      {user && <div className="user-info">User: {user.name}</div>}
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          className='name' 
          name='name'
          value={formData.name}
          onChange={handleChange}
          type='text' 
          placeholder='Bruno'
        />
        <label>Lastname</label>
        <input 
          className='lastname' 
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
          type='text' 
          placeholder='Alvarez'
        />
        <label>Email</label>
        <input 
          className='email' 
          name='email'
          value={formData.email}
          onChange={handleChange}
          type='email' 
          placeholder='example@email.com'
        />
        <label>Password</label>
        <input 
          className='password' 
          name='password'
          value={formData.password}
          onChange={handleChange}
          type='password'
        />
        <label>Phone number</label>
        <input 
          className='phoneNumber' 
          name='phone_number'
          value={formData.phone_number}
          onChange={handleChange}
          type='text' 
          placeholder='1138082383'
        />
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
}

export default App;