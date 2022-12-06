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
driver1 = webdriver.Chrome(options=options, service=s)
driver1.implicitly_wait(5)
driver1.maximize_window()
driver1.get('http://localhost:3000/login')
driver1.find_element(By.ID, 'email').send_keys('arda')
driver1.find_element(By.ID, 'password').send_keys('Aaaaaaaa1?')
time.sleep(1)
driver1.find_element(By.ID, 'loginButton').click()
driver2 = webdriver.Chrome(options=options, service=s)
driver2.implicitly_wait(5)
driver2.maximize_window()
driver2.get('http://localhost:3000/login')
driver2.find_element(By.ID, 'email').send_keys('furkan')
driver2.find_element(By.ID, 'password').send_keys('Aaaaaaaa1?')
driver2.find_element(By.ID, 'loginButton').click()
driver1.find_element(By.ID, 'messageCard').click()
time.sleep(1)
driver1.find_element(By.ID, 'messageInput').click()
driver1.find_element(By.ID, 'messageInput').send_keys('Hello There')
driver1.find_element(By.ID, 'sendIcon').click()
driver2.find_element(By.ID, 'messageCard').click()
time.sleep(1)
try:
    if (driver2.find_element(By.ID, 'chatIcon').text == 'Hello There'):
        print("test passed")
    else:
        print("test failed")
except TimeoutException:
    print("test failed")
