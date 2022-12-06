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
driver.get('http://localhost:3000/login')
driver.find_element(By.ID, 'email').send_keys('examplemail@gmail.com')
driver.find_element(By.ID, 'password').send_keys('Arda123?')
time.sleep(1)
driver.find_element(By.ID, 'loginButton').click()
time.sleep(1)
try:
    WebDriverWait(driver, 3).until(EC.alert_is_present(),
                                   'Successfully logged in')
    alert = driver.switch_to.alert
    if (alert.text == 'Successfully logged in'):
        print("test passed")
    else:
        print("test failed")
except TimeoutException:
    print("test failed")
