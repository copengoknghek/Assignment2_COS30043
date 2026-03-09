<template>
  <div class="application-form-container">
    <h2>Job Application</h2>
    <form @submit.prevent="handleSubmit" method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
      
      <!-- Personal Information -->
      <fieldset class="mb-4">
        <legend>Personal Information</legend>
        
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="firstName" class="form-label">First Name:</label>
            <input 
              type="text" 
              class="form-control" 
              :class="{ 'is-invalid': errors.firstName }"
              id="firstName" 
              name="firstName"
              v-model="formData.firstName"
              @blur="validateFirstName"
            />
            <div class="invalid-feedback">{{ errors.firstName }}</div>
          </div>
          
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name:</label>
            <input
              type="text" 
              class="form-control" 
              :class="{ 'is-invalid': errors.lastName }"
              id="lastName" 
              name="lastName"
              v-model="formData.lastName"
              @blur="validateLastName"
            />
            <div class="invalid-feedback">{{ errors.lastName }}</div>
          </div>
        </div>

        <div class="mb-3">
          <label for="dateOfBirth" class="form-label">Date of Birth:</label>
          <input 
            type="date" 
            class="form-control" 
            :class="{ 'is-invalid': errors.dateOfBirth }"
            id="dateOfBirth" 
            name="dateOfBirth"
            v-model="formData.dateOfBirth"
            @blur="validateDateOfBirth"
          />
          <div class="invalid-feedback">{{ errors.dateOfBirth }}</div>
        </div>
      </fieldset>

      <!-- Account Details -->
      <fieldset class="mb-4">
        <legend>Account Details</legend>
        
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="username" class="form-label">Username:</label>
            <input 
              type="text" 
              class="form-control" 
              :class="{ 'is-invalid': errors.username }"
              id="username" 
              name="username"
              v-model="formData.username"
              @blur="validateUsername"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          
          <div class="col-md-6">
            <label for="password" class="form-label">Password:</label>
            <input 
              type="password" 
              class="form-control" 
              :class="{ 'is-invalid': errors.password }"
              id="password" 
              name="password"
              v-model="formData.password"
              @blur="validatePassword"
            />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6">
            <label for="confirmPassword" class="form-label">Confirm Password:</label>
            <input 
              type="password" 
              class="form-control" 
              :class="{ 'is-invalid': errors.confirmPassword }"
              id="confirmPassword" 
              name="confirmPassword"
              v-model="formData.confirmPassword"
              @blur="validateConfirmPassword"
            />
            <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
          </div>
          
          <div class="col-md-6">
            <label for="email" class="form-label">Email:</label>
            <input 
              type="email" 
              class="form-control" 
              :class="{ 'is-invalid': errors.email }"
              id="email" 
              name="email"
              v-model="formData.email"
              @blur="validateEmail"
            />
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
        </div>
      </fieldset>

      <!-- Address -->
      <fieldset class="mb-4">
        <legend>Address</legend>
        
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="streetAddress" class="form-label">Street Address:</label>
            <input 
              type="text" 
              class="form-control" 
              :class="{ 'is-invalid': errors.streetAddress }"
              id="streetAddress" 
              name="streetAddress"
              v-model="formData.streetAddress"
              @blur="validateStreetAddress"
            />
            <div class="invalid-feedback">{{ errors.streetAddress }}</div>
          </div>
          
          <div class="col-md-6">
            <label for="suburb" class="form-label">Suburb:</label>
            <input 
              type="text" 
              class="form-control" 
              :class="{ 'is-invalid': errors.suburb }"
              id="suburb" 
              name="suburb"
              v-model="formData.suburb"
              @blur="validateSuburb"
            />
            <div class="invalid-feedback">{{ errors.suburb }}</div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6">
            <label for="postcode" class="form-label">Postcode:</label>
            <input 
              type="text" 
              class="form-control" 
              :class="{ 'is-invalid': errors.postcode }"
              id="postcode" 
              name="postcode"
              v-model="formData.postcode"
              @blur="validatePostcode"
            />
            <div class="invalid-feedback">{{ errors.postcode }}</div>
          </div>
          
          <div class="col-md-6">
            <label for="mobileNumber" class="form-label">Mobile Number:</label>
            <input 
              type="text" 
              class="form-control" 
              :class="{ 'is-invalid': errors.mobileNumber }"
              id="mobileNumber" 
              name="mobileNumber"
              v-model="formData.mobileNumber"
              @blur="validateMobileNumber"
            />
            <div class="invalid-feedback">{{ errors.mobileNumber }}</div>
          </div>
        </div>
      </fieldset>

      <!-- Preferred Job Category -->
      <div class="mb-4">
        <label for="preferredJobCategory" class="form-label">Preferred Job Category:</label>
        <select 
          class="form-select" 
          :class="{ 'is-invalid': errors.preferredJobCategory }"
          id="preferredJobCategory" 
          name="preferredJobCategory"
          v-model="formData.preferredJobCategory"
          @blur="validatePreferredJobCategory"
        >
          <option value="">-- Please select --</option>
          <option value="AI">AI</option>
          <option value="Data Science">Data Science</option>
          <option value="Software Development">Software Development</option>
          <option value="DevOps">DevOps</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>
        <div class="invalid-feedback">{{ errors.preferredJobCategory }}</div>
      </div>

      <!-- Terms and Conditions -->
      <div class="mb-3">
        <button type="button" class="btn btn-secondary" @click="toggleTerms">
          Terms and Conditions
        </button>
        <div v-if="showTerms" class="alert alert-info mt-3">
          <h5>Terms and Conditions</h5>
          <p>
            By submitting this application, you agree to our terms and conditions. 
            All information provided must be accurate and truthful. We reserve the right 
            to verify any information submitted. Your personal data will be handled in 
            accordance with applicable privacy laws and will only be used for recruitment purposes.
          </p>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="mb-3">
        <button type="submit" class="btn btn-primary me-2">Submit</button>
        <button type="reset" class="btn btn-secondary" @click="resetForm">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ApplicationForm',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        dateOfBirth: '',
        preferredJobCategory: ''
      },
      errors: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        dateOfBirth: '',
        preferredJobCategory: ''
      },
      showTerms: false
    };
  },
  methods: {
    validateFirstName() {
      if (!this.formData.firstName) {
        this.errors.firstName = 'First name is required.';
        return false;
      }
      if (!/^[A-Za-z]+$/.test(this.formData.firstName)) {
        this.errors.firstName = 'First name must contain only letters.';
        return false;
      }
      this.errors.firstName = '';
      return true;
    },
    
    validateLastName() {
      if (!this.formData.lastName) {
        this.errors.lastName = 'Last name is required.';
        return false;
      }
      if (!/^[A-Za-z]+$/.test(this.formData.lastName)) {
        this.errors.lastName = 'Last name must contain only letters.';
        return false;
      }
      this.errors.lastName = '';
      return true;
    },
    
    validateUsername() {
      if (!this.formData.username) {
        this.errors.username = 'Username is required.';
        return false;
      }
      if (this.formData.username.length < 3) {
        this.errors.username = 'Username must be at least 3 characters.';
        return false;
      }
      this.errors.username = '';
      return true;
    },
    
    validatePassword() {
      if (!this.formData.password) {
        this.errors.password = 'Password is required.';
        return false;
      }
      if (this.formData.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters.';
        return false;
      }
      if (!/[$%^&*]/.test(this.formData.password)) {
        this.errors.password = 'Password must include at least one special character ($, %, ^, &, *).';
        return false;
      }
      this.errors.password = '';
      return true;
    },
    
    validateConfirmPassword() {
      if (!this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Please confirm your password.';
        return false;
      }
      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match.';
        return false;
      }
      this.errors.confirmPassword = '';
      return true;
    },
    
    validateEmail() {
      if (!this.formData.email) {
        this.errors.email = 'Email is required.';
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address.';
        return false;
      }
      this.errors.email = '';
      return true;
    },
    
    validateStreetAddress() {
      if (this.formData.streetAddress && this.formData.streetAddress.length > 40) {
        this.errors.streetAddress = 'Street address must not exceed 40 characters.';
        return false;
      }
      this.errors.streetAddress = '';
      return true;
    },
    
    validateSuburb() {
      if (this.formData.suburb && this.formData.suburb.length > 20) {
        this.errors.suburb = 'Suburb must not exceed 20 characters.';
        return false;
      }
      this.errors.suburb = '';
      return true;
    },
    
    validatePostcode() {
      if (!this.formData.postcode) {
        this.errors.postcode = 'Postcode is required.';
        return false;
      }
      if (!/^\d{4}$/.test(this.formData.postcode)) {
        this.errors.postcode = 'Postcode must be exactly 4 digits.';
        return false;
      }
      this.errors.postcode = '';
      return true;
    },
    
    validateMobileNumber() {
      if (!this.formData.mobileNumber) {
        this.errors.mobileNumber = 'Mobile number is required.';
        return false;
      }
      if (!/^04\d{8}$/.test(this.formData.mobileNumber)) {
        this.errors.mobileNumber = 'Mobile number must be exactly 10 digits and start with 04.';
        return false;
      }
      this.errors.mobileNumber = '';
      return true;
    },
    
    validateDateOfBirth() {
      if (!this.formData.dateOfBirth) {
        this.errors.dateOfBirth = 'Date of birth is required.';
        return false;
      }
      
      const birthDate = new Date(this.formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      if (age < 16) {
        this.errors.dateOfBirth = 'You must be at least 16 years old to apply.';
        return false;
      }
      
      this.errors.dateOfBirth = '';
      return true;
    },
    
    validatePreferredJobCategory() {
      if (!this.formData.preferredJobCategory) {
        this.errors.preferredJobCategory = 'Please select a preferred job category.';
        return false;
      }
      this.errors.preferredJobCategory = '';
      return true;
    },
    
    validateForm() {
      const isFirstNameValid = this.validateFirstName();
      const isLastNameValid = this.validateLastName();
      const isUsernameValid = this.validateUsername();
      const isPasswordValid = this.validatePassword();
      const isConfirmPasswordValid = this.validateConfirmPassword();
      const isEmailValid = this.validateEmail();
      const isStreetAddressValid = this.validateStreetAddress();
      const isSuburbValid = this.validateSuburb();
      const isPostcodeValid = this.validatePostcode();
      const isMobileNumberValid = this.validateMobileNumber();
      const isDateOfBirthValid = this.validateDateOfBirth();
      const isPreferredJobCategoryValid = this.validatePreferredJobCategory();
      
      return (
        isFirstNameValid &&
        isLastNameValid &&
        isUsernameValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isEmailValid &&
        isStreetAddressValid &&
        isSuburbValid &&
        isPostcodeValid &&
        isMobileNumberValid &&
        isDateOfBirthValid &&
        isPreferredJobCategoryValid
      );
    },
    
    handleSubmit(event) {
      if (!this.validateForm()) {
        event.preventDefault();
        alert('Please fix all validation errors before submitting.');
        return;
      }
      // If validation passes, the form will submit naturally to the action URL
      event.target.submit();
    },
    
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        dateOfBirth: '',
        preferredJobCategory: ''
      };
      this.errors = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        dateOfBirth: '',
        preferredJobCategory: ''
      };
    },
    
    toggleTerms() {
      this.showTerms = !this.showTerms;
    }
  }
};
</script>

<style scoped>
.application-form-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.application-form-container h2 {
  color: #2c3e50;
  margin-bottom: 30px;
}

fieldset {
  border: 1px solid #dee2e6;
  padding: 20px;
  border-radius: 5px;
}

legend {
  font-size: 1.1rem;
  font-weight: bold;
  color: #495057;
  width: auto;
  padding: 0 10px;
}

.form-label {
  font-weight: 500;
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
}
</style>
