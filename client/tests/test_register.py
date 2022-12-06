import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import TimeoutException


# Test Case Description --> User logs in with correct e-mail and password
s = Service(ChromeDriverManager().install())
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.add_argument("--disable-web-security")
options.add_argument("--disable-site-isolation-trials")
driver = webdriver.Chrome(options=options, service=s)
driver.implicitly_wait(5)
driver.maximize_window()
driver.get('http://localhost:3000/register')
driver.find_element(By.ID, 'name').send_keys('Abdullah')
driver.find_element(By.ID, 'surname').send_keys('Koc')
driver.find_element(By.ID, 'email').send_keys('abdullak@gmail.com')
driver.find_element(By.ID, 'password').send_keys('Arda123?')
driver.find_element(By.ID, 'approvePassword').send_keys('Arda123?')
driver.find_element(By.ID, 'registerButton').click()
time.sleep(1)
try:
    WebDriverWait(driver, 3).until(EC.alert_is_present(),
                                   'Successfully registered.')
    alert = driver.switch_to.alert
    if (alert.text == 'Successfully registered.'):
        print("test passed")
    else:
        print("test failed")
except TimeoutException:
    print("test failed")
