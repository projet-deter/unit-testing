
class UserTest extends TestCase
{

	/**
	* @covers User::isValid
	*/
	public function testIsValidNominal()
	{
		$user = new User("test@test.fr", "toto", "toto", 20);
		$result = $user->isValid();
		$this->assertTrue($result);
	}
}