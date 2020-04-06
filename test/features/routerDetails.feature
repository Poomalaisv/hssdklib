Feature: Has all APIs related to router

    Scenario: 1+ 0
      Given I start with 1
      When I add 0
      Then I ended up with 1
      
    Scenario: Get Router Details
        Given The Household url "http://nv-homescout.nvhomescout-transfer.com:80/" is available
        And The Authorization token "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJob21lc2NvdXQiLCJqdGkiOiI2NDQ5Mjc4Iiwic3ViIjoiYWJhZTAyYzktNjgwZi0xMWVhLWJjZjYtNjAzOGUwZDkyZTkxIiwicm9sZSI6IkFHRU5UIiwiYWNjb3VudCI6Ijg3OWMyZjJlLTE5YmItNDExYi04ZmUzLTEzYzFiNGU0ZTY5OCIsImlhdCI6MTU4NDQyMzY0MSwiZXhwIjoxNTg0NTEwMDQxfQ.1BVcYmNTpzvQ5hsQX3672snYzMr_tUMnT-tGECiZSUdFfhZaDv5y3NmXHEG_va1vp8zVRu7shdEZeHlvXZPADg" is available
        When The Router details are fetched
        Then Router details are returned



#Feature: Google search

  #Scenario: Google search should not give results for crazy searches
    #Given I navigate to the url "http://www.google.com"
    #When I do a search for "\" aaaaccccccaaaaaaaaabbbbbbaaabbbbbbbaaa \"" 
    # At the time of writing this nobody has answered this exact question yet.
    #Then I should see the text "Your search - "
