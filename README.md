# WEEK 2

# Zelimo lijep Instagram header

## ukradimo logo i ubacimo u App.vue
- iskopiramo svg u App.vue umjesto Our App
- https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png u public/images/logo.png

	<svg aria-label="Instagram" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="34"><path d="M13.86.13A17 17 0 008 1.26 11 11 0 003.8 4 12.22 12.22 0 001 8.28 18 18 0 00-.11 14.1c-.13 2.55-.13 3.38-.13 9.9s0 7.32.13 9.9A18 18 0 001 39.72 11.43 11.43 0 003.8 44 12.17 12.17 0 008 46.74a17.75 17.75 0 005.82 1.13c2.55.13 3.38.13 9.9.13s7.32 0 9.9-.13a17.82 17.82 0 005.83-1.13A11.4 11.4 0 0043.72 44a11.94 11.94 0 002.78-4.24 17.7 17.7 0 001.13-5.82c.13-2.55.13-3.38.13-9.9s0-7.32-.13-9.9a17 17 0 00-1.13-5.86A11.31 11.31 0 0043.72 4a12.13 12.13 0 00-4.23-2.78A17.82 17.82 0 0033.66.13C31.11 0 30.28 0 23.76 0s-7.31 0-9.9.13m.2 43.37a13.17 13.17 0 01-4.47-.83 7.25 7.25 0 01-2.74-1.79 7.25 7.25 0 01-1.79-2.74 13.23 13.23 0 01-.83-4.47c-.1-2.52-.13-3.28-.13-9.7s0-7.15.13-9.7a12.78 12.78 0 01.83-4.44 7.37 7.37 0 011.79-2.75A7.35 7.35 0 019.59 5.3a13.17 13.17 0 014.47-.83c2.52-.1 3.28-.13 9.7-.13s7.15 0 9.7.13a12.78 12.78 0 014.44.83 7.82 7.82 0 014.53 4.53 13.12 13.12 0 01.83 4.44c.13 2.51.13 3.27.13 9.7s0 7.15-.13 9.7a13.23 13.23 0 01-.83 4.47 7.9 7.9 0 01-4.53 4.53 13 13 0 01-4.44.83c-2.51.1-3.28.13-9.7.13s-7.15 0-9.7-.13m19.63-32.34a2.88 2.88 0 102.88-2.88 2.89 2.89 0 00-2.88 2.88M11.45 24a12.32 12.32 0 1012.31-12.35A12.33 12.33 0 0011.45 24m4.33 0a8 8 0 118 8 8 8 0 01-8-8"></path></svg>
	<img src="/images/logo.png" width="103" height="29" >

## sredimo malo CSS
	<style lang="scss">
	nav.navbar {
	a {
		svg {
		border-right: #aaa 1px solid;
		margin-right: 10px;
		padding-right: 10px;
		}

		img {
		position: relative;
		top: 3px;
		}
	}
	}
	</style>

# dodajmo search
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 mr-auto ml-5">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2" to="/login">Login</router-link>

# background boja
	body {
	background-color: rgba(var(--b3f,250,250,250),1)
	}

	.bg-white {
	background-color: white;
	border-bottom: #ccc 1px solid;
	margin-bottom: 20px;
	padding: 10px;
	}

# zelimo napraviti main view u 2 stupca
- maknemo row i col iz App.vue, ostavimo container
- dodamo row sa col-8 i col-4 u Home.vue, a col u login i signup
- pocistimo login i signup
	<template>
	<div>
	<div class="row">
		<div class="col">
		<h1 class="text-center mb-5">This is a login page</h1>
		</div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col">
		</div>
		<div class="col">

- Napisat cemo samo sidebar tekst za sada

# stavimo jedan card
- iskopiramo sa headerom i footerom umjesto jumbotrona

	<div class="card text-center">
	<div class="card-header text-left">
		Featured
	</div>
	<div class="card-body">
		<h5 class="card-title">Special title treatment</h5>
		<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
		<a href="#" class="btn btn-primary">Go somewhere</a>
	</div>
	<div class="card-footer text-left">
		2 days ago
	</div>
	</div>

- skinemo par slika sa https://unsplash.com/

	<div class="card-body">
		<img class="card-img-top" src="/images/unsplash.jpg" alt="Maznusmo s unsplasha i bilo bi lijepo da napisemo cija je slika">
	</div>

	<style lang="scss">

	.card-body {
		padding: 0px;
	}

	</style>

# izvucemo card u komponentu
- napravimo components/InstagramCard.vue i iskopiramo div.card
- Zamijenimo poziv HelloWorld komponente sa InstagramCard u Home.vue

	<template>
	<div class="row">
		<div class="col-8">

		<InstagramCard/>

		</div>
		<div class="col-4">
		Mi smo sidebar
		</div>
	</div>
	</template>

	<script>
	import InstagramCard from '@/components/InstagramCard.vue'

	export default {
	name: 'home',
	components: {
		InstagramCard
	}
	}
	</script>

- iskopiramo par puta <InstagramCard/>


#######################################################

# vue create instaclone
- Manually
-- Babel
-- Router
-- CSS preprocessor
-- no linter
-- history mode
-- node-sass

# Start the app
yarn serve

# Change the about screen as login
App.vue: About -> Login
router/index.js: about -> login
views: About.vue -> Login.vue

# Install Twitter Bootstrap
https://getbootstrap.com/docs/4.3/getting-started/download/

## public/index.html
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

# Login.vue
	<form>
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="exampleCheck1">
	    <label class="form-check-label" for="exampleCheck1">Check me out</label>
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
	</form>

# Bootstrap grid u Login.vue (pa stavi form u sredinu)

	<div class="container">
	  <div class="row">
	    <div class="col-sm">
	      One of three columns
	    </div>
	    <div class="col-sm">
	      One of three columns
	    </div>
	    <div class="col-sm">
	      One of three columns
	    </div>
	  </div>
	</div>

# Kopiraj Login.vue u Signup.vue

	<template>
	  <div>
	    <h1>This is a signup page</h1>
	    <div class="container">
	      <div class="row mt-5">
	        <div class="col-sm">
	        </div>
	        <div class="col-sm">
	          <form>
	            <div class="form-group">
	              <label for="emailField">Email address</label>
	              <input type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
	              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	            </div>
	            <div class="form-group">
	              <label for="passwordField">Password</label>
	              <input type="password" class="form-control" id="passwordField" placeholder="Password">
	            </div>
	            <div class="form-group">
	              <label for="confirmPasswordField">Confirm Password</label>
	              <input type="password" class="form-control" id="confirmPasswordField" placeholder="Password">
	            </div>
	            <button type="submit" class="btn btn-primary mt-5">Submit</button>
	          </form>
	        </div>
	        <div class="col-sm">
	        </div>
	      </div>
	    </div>
	  </div>
	</template>

# Dodaj signup link u router/index.js i App.vue

# Stavi container/row/col u index.html

# Dodaj site-wide navbar u App.vue

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Navbar</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Link</a>
	      </li>
	      <li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Dropdown
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
	          <a class="dropdown-item" href="#">Action</a>
	          <a class="dropdown-item" href="#">Another action</a>
	          <div class="dropdown-divider"></div>
	          <a class="dropdown-item" href="#">Something else here</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	      </li>
	    </ul>
	    <form class="form-inline my-2 my-lg-0">
	      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	    </form>
	  </div>
	</nav>

# Zamijeni Home target sa # u /
Primijeti da nam se refresha stranica!

# Zamijeni search sa login/signup
    <button class="btn btn-info my-2 my-sm-0 mr-2" type="submit">Login</button>
    <button class="btn btn-outline my-2 my-sm-0" type="submit">Signup</button>

# Dodaj footer u App.vue

# Kopiraj iz originalnih router linkova u navbar

# Idemo dodati state u App.vue
	<script>
	export default {
	  data () {
	    return {
	      authenticated: false,
	      userEmail: 'fake@email.com',
	      userName: 'Neki user'
	    }
	  }
	}
	</script>

# Izmijeni login button
    <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2" to="/login">Login</router-link>

# Izmijeni authenticated field u true i vidi kako nestane button, pa vrati na false da se pojavi.

# Idemo napraviti fake login, hocemo da na Login stranici button ulogira usera.
# Klik na Submit nam refresha stranicu, sto ne zelimo. Sad cemo mi handlati submit sami.

	<form @submit="onSubmit">

	<script>
	export default {
	  methods: {
	    onSubmit () {
	      console.log("Submittasmo")
	    }
	  }
	}
	</script>

# I dalje refresha stranicu, ovo ce to srediti:

	<form @submit.prevent="onSubmit">

# Nemamo kako doci s Login stranice do podataka o useru. Izvuci cemo nas state u poseban file i dijeliti ga gdje treba (store.js).

	export default {
	    authenticated: false,
	    userEmail: 'fake@email.com',
	    userName: 'Neki user'
	}

# I sad cemo u App.vue vratiti store umjesto in-place objekta:

	<script>
	import store from '@/store.js'

	export default {
	  data () {
	    return store;
	  }
	}
	</script>

# I mozemo u Login.vue promijeniti da pristupamo istim podacima:

<script>
import store from '@/store.js'

	export default {
	  methods: {
	    onSubmit () {
	      store.authenticated = true
	    }
	  }
	}
	</script>

# Ajmo dodati Logout u App.vue navbar:

    <a @click="logout" v-if="authenticated" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>

# Moramo dodati i handler funkciju:

	<script>
	import store from '@/store.js'

	export default {
	  data () {
	    return store;
	  },

	  methods: {
	    logout() {
	      store.authenticated = false
	    }
	  }
	}
	</script>

# Napisat cemo i ime logiranog korisnika u Vue.js:

    <span v-if="authenticated">
      {{ userName }}
      <a @click="logout" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>
    </span>
