//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});

// MA
router.post('/ma/ma_current_address_answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const over18 = req.session.data['current-address']
  
    if (over18 === 'false') {
      res.redirect('/ma/ma_address_lookup')
    } else {
      res.redirect('/ma')
    }
  })

  // MA/ma_address_lookup
router.post('/ma/ma_address_lookup_error', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const address = req.session.data['address-lookup']
  
    if (address === '') {
      res.redirect('/ma/ma_address_error')
    } else {
      res.redirect('/ma/ma_address_dropdown')
    }
  })

  // MA/ma_address_dropdown
  router.post('/ma/ma_address_dropdown_error', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const dropdown = req.session.data['sort']
  
    if (dropdown === '5 addresses found') {
      res.redirect('/ma/ma_address_dropdown_error')
    } else {
      res.redirect('/ma/ma_confirm')
    }
  })

    // MA/ma_address_manually
    router.post('/ma/ma_address_manually_error', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      const addressline1 = req.session.data['address-line-1']
    
      if (addressline1 === '') {
        res.redirect('/ma/ma_address_manually_error')
      } else {
        res.redirect('/ma/ma_confirm')
      }
    })

   // MVP2 //

// UK address?
// router.post('/mvp2/uk_question', function (req, res) {
//   // Get the answer from session data
//   // The name between the quotes is the same as the 'name' attribute on the input elements
//   // However in JavaScript we can't use hyphens in variable names

//   const ukaddress = req.session.data['uk-question']

//   if (ukaddress === 'false') {
//     res.redirect('/mvp2/country_list')
//   } else {
//     res.redirect('/mvp2/address_lookup')
//   }
// })

// Current address?
router.post('/international-addresses/current_address_answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['current-address']

  if (over18 === 'false') {
    res.redirect('/international-addresses/uk_question')
  } else {
    res.redirect('/complete')
  }
})

  // capture-new-residential-address/address-lookup
  router.post('/capture-new-residential-address/address-error', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const address = req.session.data['address-lookup']
  
    if (address === '') {
      res.redirect('/capture-new-residential-address/address-error')
    } else {
      res.redirect('/capture-new-residential-address/address-dropdown')
    }
  })

    // capture-new-residential-address/address-dropdown
    router.post('/capture-new-residential-address/address-dropdown', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      const dropdown = req.session.data['sort']
    
      if (dropdown === '5 addresses found') {
        res.redirect('/capture-new-residential-address/address-dropdown-error')
      } else {
        res.redirect('/capture-new-residential-address/address-date')
      }
    })

        // capture-new-residential-address/address-date
        router.post('/capture-new-residential-address/address-date', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const addressdateyear = req.session.data['address-date-year']
        
          if (addressdateyear === '2022') {
            res.redirect('/capture-new-residential-address/address-date-error')
          } else {
            res.redirect('/capture-new-residential-address/address-type')
          }
        })

        // /citizen/habitual_residency_test/authenticated/v1/habitual_residency/caring_british_eea_national.html
        router.post('/citizen/habitual_residency_test/authenticated/v1/habitual_residency/caring_british_eea_national.html', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const whatisyourrelation = req.session.data['what-is-your-relation']
        
          if (whatisyourrelation === 'spouse') {
            res.redirect('/citizen/habitual_residency_test/authenticated/v1/habitual_residency/relation_evidence/spouse_evidence.html')
          } else {
            res.redirect('/citizen/habitual_residency_test/authenticated/v1/habitual_residency/employment_status.html')
          }
        })

        // /citizen/habitual_residency_test/authenticated/v1/habitual_residency/caring_british_eea_national.html
        router.post('/citizen/habitual_residency_test/authenticated/v1/habitual_residency/relation_evidence/marriage_certificate.html', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const spouseevidence = req.session.data['spouse-evidence']
        
          if (spouseevidence === 'marriage-certificate') {
            res.redirect('/citizen/habitual_residency_test/authenticated/v1/habitual_residency/relation_evidence/marriage_certificate.html')
          } else {
            res.redirect('/citizen/habitual_residency_test/authenticated/v1/habitual_residency/employment_status.html')
          }
        })


        // /citizen/habitual_residency_test/authenticated/v2/habitual_residency/caring_british_eea_national.html
        router.post('/citizen/habitual_residency_test/authenticated/v2/habitual_residency/caring_british_eea_national.html', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const whatisyourrelation = req.session.data['what-is-your-relation']
        
          if (whatisyourrelation === 'spouse') {
            res.redirect('/citizen/habitual_residency_test/authenticated/v2/habitual_residency/relation_evidence/spouse_evidence.html')
          } else {
            res.redirect('/citizen/habitual_residency_test/authenticated/v2/habitual_residency/employment_status.html')
          }
        })

        // /citizen/habitual_residency_test/authenticated/v2/habitual_residency/caring_british_eea_national.html
        router.post('/citizen/habitual_residency_test/authenticated/v2/habitual_residency/relation_evidence/marriage_certificate.html', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const spouseevidence = req.session.data['spouse-evidence']
        
          if (spouseevidence === 'marriage-certificate') {
            res.redirect('/citizen/habitual_residency_test/authenticated/v2/habitual_residency/relation_evidence/marriage_certificate.html')
          } else {
            res.redirect('/citizen/habitual_residency_test/authenticated/v2/habitual_residency/employment_status.html')
          }
        })




        // Add the citizen hab res version 3 routes here when needed
        // /citizen/habitual_residency_test/authenticated/v2/habitual_residency/caring_british_eea_national.html
        router.post('/citizen/habitual_residency_test/authenticated/v0_3/eu_settled_status_question.html', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const settledstatus = req.session.data['settled-status']
        
          if (settledstatus === 'i-have-settled-status') {
            res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/passport_settled.html')
          } else {
            res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/passport_presettled.html')
          }
        })

        router.post('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/employment_status.html', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const employmentstatus = req.session.data['what-is-your-employment-status']
        
          if (employmentstatus === 'unemployed') {
            res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/previous_employment.html')
          } else {
            res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/earnings_report.html')
          }
        })

                  // citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-error.html
          router.post('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-error.html', function (req, res) {
            // Get the answer from session data
            // The name between the quotes is the same as the 'name' attribute on the input elements
            // However in JavaScript we can't use hyphens in variable names

            const address = req.session.data['address-lookup']

            if (address === '') {
              res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-error.html')
            } else {
              res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-dropdown.html')
            }
          })

          // capture-new-residential-address/address-dropdown
          router.post('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-dropdown.html', function (req, res) {
            // Get the answer from session data
            // The name between the quotes is the same as the 'name' attribute on the input elements
            // However in JavaScript we can't use hyphens in variable names
          
            const dropdown = req.session.data['sort']
          
            if (dropdown === '5 addresses found') {
              res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-dropdown-error.html')
            } else {
              res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-date.html')
            }
          })

          // capture-new-residential-address/address-date
          router.post('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-date.html', function (req, res) {
            // Get the answer from session data
            // The name between the quotes is the same as the 'name' attribute on the input elements
            // However in JavaScript we can't use hyphens in variable names
          
            const addressdateyear = req.session.data['address-date-year']
          
            if (addressdateyear === '2022') {
              res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/capture-new-residential-address/address-date-error.html')
            } else {
              res.redirect('/citizen/habitual_residency_test/authenticated/v0_3/habitual_residency/address_history/establish_address_history.html')
            }
          })





              // capture-new-address-manual-error
    router.post('/capture-new-residential-address/enter-address-manually-error.html', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      const addressline1 = req.session.data['address-line-1']
    
      if (addressline1 === '') {
        res.redirect('/capture-new-residential-address/enter-address-manually-error.html')
      } else {
        res.redirect('app/views/capture-new-residential-address/address-date.html')
      }
    })



module.exports = router
