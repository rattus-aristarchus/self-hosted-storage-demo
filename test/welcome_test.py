import allure

from allure_storage_demo import get_message


def test_allure_storage_demo():
    with allure.step("Welcome to Allure Report!"):
        assert get_message() == "Hello from allure-storage-demo!"
